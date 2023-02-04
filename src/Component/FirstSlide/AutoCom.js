import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


// rtl

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({area, setArea}) {

    return (

        <CacheProvider value={cacheRtl}>
            <Autocomplete
                value={area}
                onChange={(event, newValue) => {
                    setArea(newValue);
                }}
                className='w-100 mt-1 auto_compo py-1'
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option,
                    { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 9 }}
                            checked={selected}
                        />
                        {option.title}
                    </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField className='bg-light' {...params}
                        variant="outlined"
                        label="جستجو براساس ..."
                        border="1"
                        placeholder="" />
                )}
            />
        </CacheProvider>
    );
}

const top100Films = [
    { title: 'رشته' },
    { title: 'منطقه' },
];
