import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// COMPONENTS
import { Spinner, Container } from '../';
import { ReactComponent as Arrow } from '../../assets/arrow-back.svg';
// HOOKS
import { useSetPageTitle } from '../../hooks';
// MUI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
      {value === index && <StyledTabWrapper>{children}</StyledTabWrapper>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// END MUI

export const PokemonSinglePage = props => {
  // GET POKEMON NAME
  const { pokemonName } = useParams();
  // SET PAGE TITLE
  const capitlizedPokemonName = `${pokemonName
    .charAt(0)
    .toUpperCase()}${pokemonName.slice(1)}`;
  useSetPageTitle(capitlizedPokemonName);
  // FETCH POKEMON DATA
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const fetchData = async (key, url) => {
    const response = await fetch(url);
    const data = await response.json();

    let description = '';
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then(res => res.json())
      .then(data => {
        data.flavor_text_entries.some(flavor => {
          if (flavor.language.name === 'en') {
            description = flavor.flavor_text;
            return null;
          }
          return null;
        });
      });
    return { data, description };
  };

  const { isLoading, error, data } = useQuery(['pokemon', url], fetchData);

  const Pokemon = ({ data }) => {
    let {
      id,
      name,
      weight,
      height,
      stats,
      base_experience,
      abilities,
    } = data.data;
    height = `${height / 10}m`;
    weight = `${weight / 10}kg`;
    const { description } = data;
    const types = data.data.types.map(type => type.type.name);
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <>
        <PoekmonForeground className={types[0]}>
          <Container>
            <GoBackButton onClick={() => props.history.goBack()}>
              <GoBackSvg />
            </GoBackButton>
            <Header>
              <Title>{name}</Title>
              <SubTitle>#{id}</SubTitle>
            </Header>
            <Badges>
              {types.map(type => (
                <Badge key={type} className='badge'>
                  {type}
                </Badge>
              ))}
            </Badges>
            <Image url={imageUrl} />
          </Container>
        </PoekmonForeground>
        <PokemonDetails>
          <Container>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='Pokemon details'
              variant='fullWidth'
              indicatorColor='primary'
              textColor='primary'
            >
              <Tab label='About' {...a11yProps(0)} />
              <Tab label='Stats' {...a11yProps(1)} />
              <Tab label='More' {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Text>{description}</Text>
              <PokemonSizeWrapper>
                <PokemonSizeColumn>
                  <PokemonSizeLabel>Weight:</PokemonSizeLabel>
                  <PokemonSizeDescription>{weight}</PokemonSizeDescription>
                </PokemonSizeColumn>
                <PokemonSizeColumn>
                  <PokemonSizeLabel>Height:</PokemonSizeLabel>
                  <PokemonSizeDescription>{height}</PokemonSizeDescription>
                </PokemonSizeColumn>
              </PokemonSizeWrapper>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Table>
                {stats.map(stat => {
                  return (
                    <TableRow key={stat.stat.name}>
                      <TableLabel>{stat.stat.name.toUpperCase()}</TableLabel>
                      <TableValue>{stat.base_stat}</TableValue>
                      <TablePercentage>
                        <StatContainer>
                          <StatFill width={stat.base_stat} />
                        </StatContainer>
                      </TablePercentage>
                    </TableRow>
                  );
                })}
              </Table>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Table>
                <TableRow>
                  <TableLabel>Base experience</TableLabel>
                  <TableValue>{base_experience}</TableValue>
                </TableRow>
                <TableRow>
                  <TableLabel>Abilities</TableLabel>
                  {abilities.map(ability => {
                    const {
                      ability: { name },
                    } = ability;
                    return <TableValue key={name}> {name}</TableValue>;
                  })}
                </TableRow>
              </Table>
            </TabPanel>
          </Container>
        </PokemonDetails>
      </>
    );
  };

  return (
    <>
      {isLoading && <Spinner />}
      {error && error.message}
      {data && <Pokemon data={data} />}
    </>
  );
};

const PoekmonForeground = styled.div`
  padding-top: 3rem;
`;
const GoBackButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;
const GoBackSvg = styled(Arrow)`
  fill: ${({ theme: { color } }) => color.white};
  width: 3rem;
  height: 3rem;
`;
const Header = styled.header`
  margin: 3rem 0 1.4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.lg};
  font-weight: 700;
  color: ${({ theme: { color } }) => color.white};
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin: 0;
`;
const SubTitle = styled.h3`
  font-size: ${({ theme: { fontSize } }) => fontSize.md};
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
  margin: 0;
`;
const Badges = styled.div`
  display: flex;
  & :nth-child(1) {
    margin-right: 0.6rem;
  }
`;
const Badge = styled.p`
  margin: 0;
  width: max-content;
  padding: 0.6rem 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 3rem;
  text-transform: capitalize;
  color: ${({ theme: { color } }) => color.white};
`;
const Image = styled.div`
  height: 23.6rem;
  width: 23.6rem;
  margin: 0 auto;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  bottom: -1rem;
  z-index: 2;
`;
const PokemonDetails = styled.main`
  width: 100%;
  display: block;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: ${({ theme: { color } }) => color.white};
  padding: 5rem 0;
  position: relative;
  top: -2rem;
`;

const StyledTabWrapper = styled.div`
  padding: 1.6rem;
`;

const Text = styled.p`
  margin: 3.5rem 0;
  color: ${({ theme: { color } }) => color.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  line-height: 1.4;
`;

const PokemonSizeWrapper = styled.div`
  width: 90%;
  margin: 2.6rem auto;
  display: flex;
  padding: 1.8rem 2rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PokemonSizeColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const PokemonSizeLabel = styled.p`
  color: ${({ theme: { color } }) => color.gray};
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const PokemonSizeDescription = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme: { color } }) => color.black};
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const TableRow = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  & > * {
    flex: 1;
  }
`;

const TableLabel = styled.h2`
  margin: 0;
  color: ${({ theme: { color } }) => color.gray};
  font-size: 1.4rem;
`;

const TableValue = styled.p`
  margin: 0;
  color: ${({ theme: { color } }) => color.black};
  font-size: 1.4rem;
  text-align: center;
`;

const TablePercentage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const StatContainer = styled.div`
  width: 100%;
  background-color: ${({ theme: { color } }) => color.gray};
  height: 5px;
  position: relative;
  border-radius: 3px;
`;

const StatFill = styled.div`
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 3px;
  background-color: ${({ theme: { color } }) => color.accent};
  width: ${({ width }) => width}%;
`;
