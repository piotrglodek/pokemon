import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '../';
import * as S from './styled';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 45,
      width: '100%',
      backgroundColor: '#6c79db',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'capitalize',
    color: '#7b9095',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    '&:focus': {
      opacity: 1,
      color: '#303943',
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PokemonTabs = props => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { weight, height, stats } = props.pokemon;
  height = `${height / 10}m`;
  weight = `${weight / 10}kg`;
  return (
    <div>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label='Pokemon details'
        variant='fullWidth'
      >
        <StyledTab label='About' {...a11yProps(0)} />
        <StyledTab label='Base Stats' {...a11yProps(1)} />
        <StyledTab label='Abilities' {...a11yProps(2)} />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <Typography.Text>details</Typography.Text>
        <S.PokemonSizeWrapper>
          <S.PokemonSizeColumn>
            <S.PokemonSizeLabel>Weight:</S.PokemonSizeLabel>
            <S.PokemonSizeDescription>{weight}</S.PokemonSizeDescription>
          </S.PokemonSizeColumn>
          <S.PokemonSizeColumn>
            <S.PokemonSizeLabel>Height:</S.PokemonSizeLabel>
            <S.PokemonSizeDescription>{height}</S.PokemonSizeDescription>
          </S.PokemonSizeColumn>
        </S.PokemonSizeWrapper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <S.Table>
          {stats.map(stat => {
            return (
              <S.TableRow key={stat.stat.name}>
                <S.TableLabel>{stat.stat.name.toUpperCase()}</S.TableLabel>
                <S.TableValue>{stat.base_stat}</S.TableValue>
                <S.TablePercentage>
                  <S.StatContainer>
                    <S.StatFill width={stat.base_stat} />
                  </S.StatContainer>
                </S.TablePercentage>
              </S.TableRow>
            );
          })}
        </S.Table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        abilities
      </TabPanel>
    </div>
  );
};
