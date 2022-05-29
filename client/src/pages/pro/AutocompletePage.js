import React, { Component } from 'react';
import {
  MDBContainer,
  MDBAutocomplete,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBAutoV5,
  MDBTypography
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illnois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic (CAR)',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia (FYROM)',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (UAE)',
  'United Kingdom (UK)',
  'United States of America (USA)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City (Holy See)',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 }
];

const subjects = [
  "Where's My Stuff?",
  'Cancel Items or Orders',
  'Returns & Refunds',
  'Shipping Rates & Information',
  'Change Your Payment Method',
  'Manage Your Account Information',
  'About Two-Step Verification',
  'Cancel Items or Orders',
  'Change Your Order Information',
  'Contact Third-Party Sellers',
  'More in Managing Your Orders'
];

class AutocompletePage extends Component {
  state = {
    modal: false,
    objValue: false,
    textToPlace: ''
  };

  componentDidMount() {
    this.setState({
      textToPlace: 'Data object and highlight'
    });
  }

  componentDidUpdate(prevState, prevProps) {
    const { objValue } = this.state;
    if (objValue !== prevProps.objValue) {
      if (objValue) {
        this.setState({
          textToPlace: 'Data with key property'
        });
      } else {
        this.setState({
          textToPlace: 'Data with value property'
        });
      }
    }
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  handleModalClearClick = () => {
    this.setState({
      modal: false
    });
  };

  logValue = value => {
    console.log(value);
  };

  onClickObjValue = e => {
    this.setState(prev => ({ objValue: !prev.objValue }));
  };

  render() {
    const { modal, objValue, textToPlace } = this.state;
    const smallStyle = { fontSize: '0.8rem' };
    return (
      <MDBContainer>
        <DocsLink title='Autocomplete' href='https://mdbootstrap.com/docs/react/forms/autocomplete/' />

        <SectionContainer header='New example v5'>
          <MDBTypography note noteColor='info' noteTitle='Information: '>
            This is version of Autocomplete what will be fully available in the MDBReact version 5 and it will replace
            current version of Autocomplete.
          </MDBTypography>

          <MDBAutoV5
            data={states}
            label='Data with string'
            dataKey='title'
            clear
            id='input123'
            size='md'
            visibleOptions={10}
          />

          <MDBAutoV5
            data={top100Films}
            label='Data object with no focus'
            dataKey='title'
            clear
            id='input321'
            size='md'
            visibleOptions={10}
            focused={false}
          />

          <MDBAutoV5
            data={top100Films}
            dataKey={objValue ? 'year' : 'title'}
            label={textToPlace}
            clear
            id='input12'
            highlight
            highlightStyles={{ color: 'red' }}
            background
            visibleOptions={3}
          />

          <MDBBtn onClick={this.onClickObjValue}>Change values</MDBBtn>
        </SectionContainer>

        <SectionContainer header='Basic example'>
          <MDBAutocomplete
            data={states}
            label='Choose your favorite state'
            icon='edit'
            clear
            clearClass='clear-class'
            clearColor='#a6a6a6'
            clearSize='24'
            id='input'
            getValue={this.logValue}
            size='md'
          />
        </SectionContainer>

        <SectionContainer header='With register cart'>
          <MDBCol md='9' lg='7' xl='5' className='mx-auto mt-3'>
            <MDBCard>
              <MDBCardBody className='mx-4'>
                <div className='text-center'>
                  <h3 className='dark-grey-text mb-5'>
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput label='Your email' group type='email' validate error='wrong' success='right' />
                <MDBInput label='Your password' group type='password' validate containerClass='mb-0' />
                <MDBAutocomplete label='Your country' clear data={countries} clearClass='grey-text' />
                <div className='text-center pt-3 mb-3'>
                  <MDBBtn type='button' gradient='blue' rounded className='btn-block z-depth-1a'>
                    Sign in
                  </MDBBtn>
                </div>
                <p className='dark-grey-text text-right d-flex justify-content-center mb-3 pt-2' style={smallStyle}>
                  or Sign up with:
                </p>
                <div className='row my-3 d-flex justify-content-center'>
                  <MDBBtn type='button' color='white' rounded className='mr-md-3 z-depth-1a'>
                    <MDBIcon fab icon='facebook' className='blue-text' />
                  </MDBBtn>
                  <MDBBtn type='button' color='white' rounded className='mr-md-3 z-depth-1a'>
                    <MDBIcon fab icon='twitter' className='blue-text' />
                  </MDBBtn>
                  <MDBBtn type='button' color='white' rounded className='z-depth-1a'>
                    <MDBIcon fab icon='google-plus' className='blue-text' />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className='mx-5 pt-3 mb-1'>
                <p className='grey-text d-flex justify-content-end' style={smallStyle}>
                  Already a member?
                  <a href='#!' className='blue-text ml-1'>
                    Sign In
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header='In contact form' flexCenter>
          <MDBBtn onClick={this.toggle} rounded className='mx-auto'>
            launch modal contact
          </MDBBtn>
          <MDBModal isOpen={modal} toggle={this.toggle} size='md' cascading>
            <MDBModalHeader titleClass='d-inline title' className='text-center light-blue darken-3 white-text'>
              <MDBIcon icon='pencil' />
              Contact From
              <MDBIcon icon='close' className='float-right' onClick={this.handleModalClearClick} />
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Your name' />
              <MDBInput label='Your email' iconClass='dark-grey' />
              <MDBAutocomplete label='Subject' data={subjects} clear />
              <MDBInput label='Your message' type='textarea' rows='2' icon='pencil-alt' iconClass='dark-grey' />
              <div className='text-center mt-1-half'>
                <MDBBtn color='info' className='mb-2' onClick={this.handleModalClearClick.bind(this)}>
                  send
                  <MDBIcon icon='send' className='ml-1' />
                </MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default AutocompletePage;
