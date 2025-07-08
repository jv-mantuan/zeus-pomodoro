import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => ({
      ...prevState,
      formattedSecondsRemaining: '21:00',
    }));
  }

  return (
    <form action='' className='form'>
      <button onClick={handleClick} type='button'>Clicar</button>

      <div className='formRow'>
        <DefaultInput id='input' type='text' labelText='task' placeholder='Digite algo' />
      </div>

      <div className='formRow'>
        <p>O próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
