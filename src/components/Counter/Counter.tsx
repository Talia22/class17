'use client'
import useStore from '../../app/store/useStore';

const Counter: React.FC = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;