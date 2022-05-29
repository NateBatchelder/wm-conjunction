import React, { Component } from 'react';
import { MDBDatePicker, MDBContainer, MDBBtn, MDBDatePickerV5 } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';
import moment from 'moment';

class DatePickerPage extends Component {
  state = {
    date: new Date('12.12.2012'),
    showValue: [],
    showValue1: []
  };

  getPickerValue = value => console.log(value);

  updateStateValue = value => this.setState({ date: value });

  setDate = date => this.setState({ date: new Date(date) });

  render() {
    const { date, showValue, showValue1 } = this.state;
    return (
      <MDBContainer>
        <DocsLink title='Date Picker' href='https://mdbootstrap.com/docs/react/forms/date-picker/' />
        <SectionContainer header='Basic examples' flexCenter>
          <MDBDatePicker
            clearable
            valueDefault={null}
            emptyLabel='Select Date'
            getValue={this.getPickerValue}
            className='mr-4'
          />
          <MDBDatePicker
            clearable
            getValue={this.getPickerValue}
            theme={{
              palette: {
                primary: {
                  main: '#ffbb33'
                },
                secondary: {
                  main: '#FF8800',
                  contrastText: '#ffcc00'
                }
              },
              typography: {
                useNextVariants: true
              }
            }}
          />
        </SectionContainer>

        <SectionContainer header='With setDate' flexCenter>
          <MDBDatePicker value={date} getValue={this.updateStateValue} />
          <MDBBtn onClick={() => this.setDate('10.20.2020')} size='sm' className='ml-4'>
            Set Date "10.20.2020"
          </MDBBtn>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Default' flexCenter>
          <div>
            <MDBDatePickerV5 clearable getValue={e => this.setState({ showValue: e })} chunkYears={24} />
            <div>
              {moment(showValue)
                .local('pl')
                .format('llll')}
            </div>
            <div>
              {moment(showValue)
                .local('pl')
                .format('lll')}
            </div>
            <div>
              {moment(showValue)
                .local('pl')
                .format('ll')}
            </div>
            <div>
              {moment(showValue)
                .local('pl')
                .format('l')}
            </div>
          </div>
        </SectionContainer>
        <SectionContainer header='New DatePicker - Inline' flexCenter>
          <div>
            <MDBDatePickerV5 clearable inline getValue={e => this.setState({ showValue1: e })} chunkYears={24} />

            <div>
              {moment(showValue1)
                .local('pl')
                .format('llll')}
            </div>
            <div>
              {moment(showValue1)
                .local('pl')
                .format('lll')}
            </div>
            <div>
              {moment(showValue1)
                .local('pl')
                .format('ll')}
            </div>
            <div>
              {moment(showValue1)
                .local('pl')
                .format('l')}
            </div>
          </div>
        </SectionContainer>
        <SectionContainer header='New DatePicker - Themes defaults' flexCenter>
          <div>
            <MDBDatePickerV5 clearable theme='danger' />

            <MDBDatePickerV5 clearable theme='warning' />

            <MDBDatePickerV5 clearable theme='success' />

            <MDBDatePickerV5 clearable theme='info' />

            <MDBDatePickerV5 clearable theme='dark' />

            <MDBDatePickerV5 clearable theme='secondary' />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Themes inline' flexCenter>
          <div>
            <MDBDatePickerV5 clearable theme='danger' inline />

            <MDBDatePickerV5 clearable theme='warning' inline />

            <MDBDatePickerV5 clearable theme='success' inline />

            <MDBDatePickerV5 clearable theme='info' inline />

            <MDBDatePickerV5 clearable theme='dark' inline />

            <MDBDatePickerV5 clearable theme='secondary' inline />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Disabled past' flexCenter>
          <div>
            <MDBDatePickerV5 clearable disablePast />

            <MDBDatePickerV5 clearable disablePast inline />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Disabled future' flexCenter>
          <div>
            <MDBDatePickerV5 clearable disableFuture />

            <MDBDatePickerV5 clearable disableFuture inline />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Disabled date 2020-04-12' flexCenter>
          <div>
            <MDBDatePickerV5 clearable disabledDates={['2020-04-12']} />

            <MDBDatePickerV5 clearable inline disabledDates={['2020-04-12']} />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Disabled dates from 2020-04-12 to 2020-04-20' flexCenter>
          <div>
            <MDBDatePickerV5
              clearable
              disabledDates={[
                '2020-04-12',
                '2020-04-13',
                '2020-04-14',
                '2020-04-15',
                '2020-04-16',
                '2020-04-17',
                '2020-04-18',
                '2020-04-19',
                '2020-04-20'
              ]}
            />

            <MDBDatePickerV5
              clearable
              inline
              disabledDates={[
                '2020-04-12',
                '2020-04-13',
                '2020-04-14',
                '2020-04-15',
                '2020-04-16',
                '2020-04-17',
                '2020-04-18',
                '2020-04-19',
                '2020-04-20'
              ]}
            />
          </div>
        </SectionContainer>

        <SectionContainer header='New DatePicker - Disabled dates random dates' flexCenter>
          <div>
            <MDBDatePickerV5
              clearable
              disabledDates={['2020-04-29', '2020-04-15', '2020-04-16', '2020-04-23', '2020-04-19']}
            />

            <MDBDatePickerV5
              clearable
              inline
              disabledDates={['2020-04-13', '2020-04-02', '2020-04-25', '2020-04-17', '2020-04-20']}
            />
          </div>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default DatePickerPage;
