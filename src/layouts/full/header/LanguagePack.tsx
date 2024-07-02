import { Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LanguagePack = () => {
  const router = useRouter();
  const nowLan = router.locale;
  const [language, setLanguage] = useState(nowLan);
  const changeLang = (e: SelectChangeEvent<string>) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      {
        locale: e.target.value,
      }
    );
    setLanguage(e.target.value);
  };
  return (
    <Box>
      Language :{' '}
      <Select value={language} size="small" onChange={changeLang}>
        <MenuItem value="ko">한국어</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </Box>
  );
};
export default LanguagePack;
