import React, {
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';
import splitTimeString from '../../services/splitTimeString';
import timeConverter from '../../services/timeConverter';

export interface ConfigContextData {
    active: boolean;
    timeOrRest: boolean;
    timeOriginal: string[];
    timeRest: string[];
    startCountdown: () => void;
}

export const ConfigContext = createContext<ConfigContextData>(
    {} as ConfigContextData,
);

const ConfigProvider: React.FC = ({children}) => {
  const timeCounter = 45*60;
  const restCounter = 15*60;
  const [time, setTime] = useState(timeCounter);
  const [rest, setRest] = useState(0);
  const [active, setActive] = useState(false);
  const [timeOrRest, setTimeOrRest] = useState(true);

  const convertedTime = timeConverter(time)
  const convertedRest = timeConverter(rest)

  const timeOriginal = splitTimeString(convertedTime)
  const timeRest = splitTimeString(convertedRest)
 
  const startCountdown = () => {
    setActive(pActive => !pActive)
  }

  useEffect(()=>{
      if(active && time > 0 && rest === 0){
        setTimeout(() => {
            setTime(time - 1)
        }, 1000)
      }

      if(active && rest > 0 && time === 0){
        setTimeout(() => {
            setRest(rest - 1)
        }, 1000)
      }

      if(time === 0 && rest === 0 && timeOrRest){
          setRest(restCounter)
          setActive(false)
          setTimeOrRest(p => !p)
      }
      
      if(time === 0 && rest === 0 && !timeOrRest){
            setTime(timeCounter)
            setActive(false)
            setTimeOrRest(p => !p)
      }
  },[
      active, 
      rest, 
      restCounter, 
      time, 
      timeCounter, 
      timeOrRest
    ]
  )
  
  return (
      <ConfigContext.Provider
        value={{
            active,
            timeOrRest,
            timeOriginal,
            timeRest,
            startCountdown,
        }}
      >
          {children}
      </ConfigContext.Provider>
  );
};

function useConfig(): ConfigContextData {
    const context = useContext(ConfigContext);
  
    return context;
}
  
export { ConfigProvider, useConfig };