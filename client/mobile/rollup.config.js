import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const propTypeIgnore = { "import PropTypes from 'prop-types';": "'';" };

const esm = {
  format: "esm",
  sourcemap: true
};

const getESM = override => ({ ...esm, ...override });

const commonPlugins = [
  nodeResolve({
    browser: true
  }),
  babel({
    babelrc: false,
    exclude: "node_modules/**",
    presets: [["@babel/env", { loose: true, modules: false }], "@babel/react"],
    plugins: ["@babel/plugin-proposal-class-properties"],
    runtimeHelpers: true
  }),
  commonjs({
    namedExports: {
      "react-native": ["View", "Dimensions", "TouchableOpacity"]
    }
  }),
  replace({
    _VERSION_: JSON.stringify(pkg.version)
  })
];

const prodPlugins = [
  replace({
    ...propTypeIgnore,
    "process.env.NODE_ENV": JSON.stringify("production")
  })
];

const configBase = {
  input: "./src/index.js",

  // \0 is rollup convention for generated in memory modules
  external: id =>
    !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins
};

const globals = {
  react: "React",
  "react-native": "reactNative",
  "prop-types": "PropTypes"
};

const standaloneBaseConfig = {
  ...configBase,
  input: "./src/index.js",
  output: {
    file: "dist/mdbreact-mobile.js",
    format: "umd",
    globals,
    name: "soundcloud",
    sourcemap: false
  },
  plugins: configBase.plugins.concat(
    replace({
      _SERVER_: JSON.stringify(false)
    })
  )
};

const standaloneConfig = {
  ...standaloneBaseConfig,
  plugins: standaloneBaseConfig.plugins.concat(
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  )
};

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  output: {
    ...standaloneBaseConfig.output,
    file: "dist/mdbreact-mobile.min.js"
  },
  plugins: standaloneBaseConfig.plugins.concat(prodPlugins)
};

const nativeConfig = {
  ...configBase,
  input: "./src/index.js",
  output: [
    getESM({
      file: "dist/mdbreact-mobile.esm.js"
    })
  ]
};

export default [standaloneConfig, standaloneProdConfig, nativeConfig];
