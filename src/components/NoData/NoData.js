import React from 'react';
import { Typography } from '../';

export const NoData = props => {
  const { errors } = props;
  return (
    <>
      <Typography.Text>{errors[0]}</Typography.Text>
      <Typography.Text>
        {errors[1]}
        <a target='_blank' rel='noopener noreferrer' href={errors[2]}>
          github issues
        </a>
        .
      </Typography.Text>
    </>
  );
};
