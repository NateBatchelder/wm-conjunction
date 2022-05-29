import React from 'react';
                import MDBWysiwyg from 'mdb-react-wysiwyg';

                const basicExamples = () => {
                    const initialContent =
                        `<br>
                        <p style="text-align: center;"><img src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                                class="img-fluid"></p>
                        <h1 style="text-align: center;">MDBootstrap</h1>
                        <p style="text-align: center;">WYSIWYG Editor</p>
                        <p style="text-align: center;"><a href="https://mdbootstrap.com" target="_blank" contenteditable="false"
                                style="font-size: 1rem; text-align: left;">MDBootstrap.com</a>&nbsp;© 2018</p>
                        `;

                    const translations = {
                        paragraph: 'Párrafo',
                        heading: 'Encabezado',
                        preformatted: 'Preformateado',
                        bold: 'Negrita',
                        italic: 'Itálica',
                        strikeThrough: 'Tachado',
                        underline: 'Subrayado',
                        textcolor: 'Color del texto',
                        justifyLeft: 'Alinear a la izquierda',
                        justifyCenter: 'Alinear al centro',
                        justifyRight: 'Alinear a la derecha',
                        justifyFull: 'Justificar',
                        insertlink: 'Insertar enlace',
                        insertpicture: 'Insertar imagen',
                        insertUnorderedList: 'Lista de viñetas',
                        insertOrderedList: 'Lista numerada',
                        enterurl: 'Insertar enlace',
                        imageurl: 'Insertar enlace de imagen',
                        showHTML: 'Cambiar la vista'
                    }

                    return (
                        <>
                            <MDBWysiwyg initialContent={initialContent} translations={translations} />
                        </>
                    );
                };

                export default basicExamples;