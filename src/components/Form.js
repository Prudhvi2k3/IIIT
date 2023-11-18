
import React, { useState } from 'react';
import './Form.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    volunteerDate: '',
    volunteerOpportunity: '',
    volunteerSkills: [],
    volunteerAvailability: '',
    volunteerName: '',
    volunteerEmail: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? 
        checked ? [...prevData[name], value] : prevData[name].filter(skill => skill !== value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id='form'>
    <div className="volunteer-form-container">
      <form onSubmit={handleSubmit} className="volunteer-form">
          <h1>Volunteer Sign-up</h1>

          <fieldset>
            <legend><span className="number">1</span> Date Selection</legend>
            <label htmlFor="volunteerDate">Select Date:</label>
            <input
              type="date"
              id="volunteerDate"
              name="volunteerDate"
              value={formData.volunteerDate}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <legend><span className="number">2</span> Volunteer Opportunity</legend>
            <label htmlFor="volunteerOpportunity">Select Opportunity:</label>
            <select
              id="volunteerOpportunity"
              name="volunteerOpportunity"
              value={formData.volunteerOpportunity}
              onChange={handleChange}
              required
            >
              <option value="event_planning">Event Planning</option>
              <option value="social_media_management">Social Media Management</option>
              <option value="fundraising">Fund Raising</option>
              <option value="fundraising">Public Speaking</option>
            </select>
          </fieldset>

          <fieldset>
            <legend><span className="number">3</span> Skills and Experience (Select at least 3)</legend>
            <input
              type="checkbox"
              id="event_planning"
              value="event_planning"
              name="volunteerSkills"
              checked={formData.volunteerSkills.includes('event_planning')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="event_planning">Event Planning</label><br />
            <input
              type="checkbox"
              id="social_media_management"
              value="socail_media_management"
              name="volunteerSkills"
              checked={formData.volunteerSkills.includes('socail_media_management')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="event_planning">social media management</label><br />
            <input
              type="checkbox"
              id="Fundraising"
              value="Fundraising"
              name="volunteerSkills"
              checked={formData.volunteerSkills.includes('Fundraising')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="event_planning">Fundraising</label><br />
            <input
              type="checkbox"
              id="publicgathering"
              value="publicgathering"
              name="volunteerSkills"
              checked={formData.volunteerSkills.includes('publicgathering')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="publicgathering">Public Gathering</label><br />

          </fieldset>

          <fieldset>
            <legend><span className="number">4</span> Availability</legend>
            <input
              type="radio"
              id="weekly"
              value="weekly"
              name="volunteerAvailability"
              checked={formData.volunteerAvailability === 'weekly'}
              onChange={handleChange}
              required
            />
            <label className="light" htmlFor="weekly">Weekly (2-4 hours)</label><br />
            <input
              type="radio"
              id="Monthly"
              value="Monthly"
              name="volunteerAvailability"
              checked={formData.volunteerAvailability === 'Monthly'}
              onChange={handleChange}
              required
            />
            <label className="light" htmlFor="Monthly">Monthly (1-2 hours)</label><br />

          </fieldset>

          <fieldset>
            <legend><span className="number">5</span> Contact Information</legend>
            <label htmlFor="volunteerName">Name:</label>
            <input
              type="paragraph"
              id="volunteerName"
              name="volunteerName"
              value={formData.volunteerName}
              onChange={handleChange}
              required
            />

            <label htmlFor="volunteerEmail">Email:</label>
            <input
              type="email"
              id="volunteerEmail"
              name="volunteerEmail"
              value={formData.volunteerEmail}
              onChange={handleChange}
              required
            />
          </fieldset>

          <button className='submitbutton' type="submit">Submit Volunteer Application</button>
        </form>
      </div>
      </section>
  );
};

export default VolunteerForm;
