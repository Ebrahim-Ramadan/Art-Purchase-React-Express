import React, { useState } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSharmo.css'
import dateIMG from '../assets/workshops.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SelectTemp = ({ options, label, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };



export const DateSharmo = () => {
  
    const initialStates = {
        Project: '',
        Proposal: '',
        Quotations: '',
        SignOff: '',
        Quoted: '',
        Invoiced: '',
        TimeProposal: [null, null], // [start, end]
        TimeActual: [null, null], // [start, end]
        Status: '',
      };
      const [state, setState] = useState(initialStates);
      const handleSelectChange = (key) => (valueOrDates) => {
  setState((prevState) => {
    if (Array.isArray(valueOrDates)) { // For date ranges
      return {
        ...prevState,
        [key]: valueOrDates,
      };
    } else { // For regular selects
      return {
        ...prevState,
        [key]: valueOrDates.target.value,
      };
    }
  });
      };

      const OptionsA = [
        { value: '-', label: '-' },
        { value: 'Not Sent', label: 'Not Sent' },
        { value: 'Sent', label: 'Sent' },
        { value: 'Approved', label: 'Approved' },
        { value: 'Declined', label: 'Declined' },
        { value: 'On Hold', label: 'On Hold' },
      ]
    const OptionsAMinor = [
        { value: '-', label: '-' },
        { value: 'Not Sent', label: 'Not Sent' },
        { value: 'Sent', label: 'Sent' },
        { value: 'Signed', label: 'Signed' },
    ]

    const InvoicedOptions = [
        { value: '-', label: '-' },
        { value: 'Invoiced to Finance Dep.', label: 'Invoiced to Finance Dep.' },
        { value: 'Invoiced', label: 'Invoiced' },
        { value: 'Invoiced (Annual)', label: 'Invoiced (Annual)' },
        { value: 'Paid', label: 'Paid' },
        { value: 'On Hold', label: 'On Hold' },
        { value: 'Declined', label: 'Declined' },
        { value: '1st 25% invoiced', label: '1st 25% invoiced' },
        { value: '1st 25% Paid', label: '1st 25% Paid' },
        { value: '1st 50% invoiced', label: '1st 50% invoiced' },
        { value: '1st 50% Paid', label: '1st 50% Paid' },
        { value: '2nd 50% invoiced', label: '2nd 50% invoiced' },
        { value: '2nd 50% Paid', label: '2nd 50% Paid' },
        { value: 'Invoice Canceled', label: 'Invoice Canceled' },
    ]

    const StatusOptions = [
        { value: '-', label: '-' },
        { value: 'On Track', label: 'On Track' },
        { value: 'Collection', label: 'Collection' },
        { value: 'Need Invoicing', label: 'Need Invoicing' },
        { value: 'Paid', label: 'Paid' },
        { value: 'Overdue', label: 'Overdue' },
    ]

  return (
    <div className='Sharmo-Container'>
    <div>
        <img
          className='date-img'
          width={600}
          alt='date-img'
          src={dateIMG} />
      </div>
      <div className='Datesharmo'>
          <div>
              <label >
                  Project
              </label>
              <input onChange={handleSelectChange('Project')}/>
          </div>
          <SelectTemp
              label="Proposal"
              options={OptionsA}
              value={state.Proposal}
              onChange={handleSelectChange('Proposal')}
          />
  
          <SelectTemp
              label="Quotations"
              options={OptionsA}
              value={state.Quotations}
              onChange={handleSelectChange('Quotations')}
          />
          
          <SelectTemp
              label="SignOff"
              options={OptionsAMinor}
              value={state.SignOff}
              onChange={handleSelectChange('SignOff')}
        />
        
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Quoted</span>
            </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-lg"
                    onChange={handleSelectChange('Quoted')}/>
        </div>
          <SelectTemp
              label="Invoiced"
              options={InvoicedOptions}
              value={state.Invoiced}
              onChange={handleSelectChange('Invoiced')}
          />
  
          <DatePicker
              selected={state.TimeProposal[0]}
              onChange={(dates) => handleSelectChange('TimeProposal')(dates)}
              selectsRange
              startDate={state.TimeProposal[0]}
              endDate={state.TimeProposal[1]}
              placeholderText="Select date range"
          />
  
          <DatePicker
              selected={state.TimeActual[0]}
              onChange={(dates) => handleSelectChange('TimeActual')(dates)}
              selectsRange
              startDate={state.TimeActual[0]}
              endDate={state.TimeActual[1]}
              placeholderText="Select date range"
          />
  
          <SelectTemp
              label="Status"
              options={StatusOptions}
              value={state.Status}
              onChange={handleSelectChange('Status')}
        />

        <div id='ADDbtn' >
          <Button variant="contained">ADD</Button>
        </div>
      </div>

    </div>
  )
}
