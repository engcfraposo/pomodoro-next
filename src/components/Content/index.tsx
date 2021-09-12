import React from 'react';
import Countdown from '../Countdown';
import Pomodoro from '../Pomodoro';
import * as S from './styles';

const Content: React.FC = () => {
  return (
    <>
      <S.Content>
        <Pomodoro />
      </S.Content>
      <S.Content>
        <Countdown />
      </S.Content>
    </>
  )
}

export default Content;