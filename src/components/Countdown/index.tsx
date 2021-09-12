import React from 'react';
import { useConfig } from '../../context/ConfigProvider';
import * as S from './styles';

const Countdown: React.FC = () => {
  const { active, timeOrRest, timeOriginal, timeRest, startCountdown } = useConfig()

  const [
       minuteTimeLeft, 
       minuteTimeRight,
       secondTimeLeft, 
       secondTimeRight,
  ] = timeOriginal

  const [
    minuteRestLeft, 
    minuteRestRight,
    secondRestLeft, 
    secondRestRight,
  ] = timeRest

  return timeOrRest
  ?(
    <>
        <S.CountdownContainer>
            <S.CountdownArea>
                <S.CountdownNumberFirst>{minuteTimeLeft}</S.CountdownNumberFirst>
                <S.CountdownNumberSecond>{minuteTimeRight}</S.CountdownNumberSecond>
            </S.CountdownArea>
            <S.CountdownNumberPoints>
                :
            </S.CountdownNumberPoints>
            <S.CountdownArea>
            <S.CountdownNumberFirst>{secondTimeLeft}</S.CountdownNumberFirst>
                <S.CountdownNumberSecond>{secondTimeRight}</S.CountdownNumberSecond>
            </S.CountdownArea>
        </S.CountdownContainer>
        <S.CountdownButton
                type="button"
                onClick={startCountdown}
            >
                {!active? "Iniciar um ciclo": "Parar contador de ciclo" }
        </S.CountdownButton>
    </>
  )
  :(
    <>
        <S.CountdownContainer>
            <S.CountdownArea>
                <S.CountdownNumberFirst>{minuteRestLeft}</S.CountdownNumberFirst>
                <S.CountdownNumberSecond>{minuteRestRight}</S.CountdownNumberSecond>
            </S.CountdownArea>
            <S.CountdownNumberPoints>
                :
            </S.CountdownNumberPoints>
            <S.CountdownArea>
            <S.CountdownNumberFirst>{secondRestLeft}</S.CountdownNumberFirst>
                <S.CountdownNumberSecond>{secondRestRight}</S.CountdownNumberSecond>
            </S.CountdownArea>
        </S.CountdownContainer>
        <S.CountdownButtonRest
                type="button"
                onClick={startCountdown}
            >
                {!active? "Iniciar descanso": "Parar contador de descanso" }
        </S.CountdownButtonRest>
    </> 
  );
}

export default Countdown;