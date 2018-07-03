import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const Select = ({options, handleChange, selected}) => (
  <SelectField
    className="header__select"
    value={selected ? selected : null}
    floatingLabelText="Choose city"
    onChange={handleChange.bind(this)}
  >
      {options.map((city) => {
        return (
          <MenuItem
              key = {city.name}
              primaryText = {city.name}
              value = {city.name}
          />
        );
      })}
  </SelectField>
);

export default Select;
