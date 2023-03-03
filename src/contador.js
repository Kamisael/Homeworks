import useCounter from './useCounter';

function MyComponent() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div class="contador2">
      <h1>useCounter: {count}</h1>
      <button onClick={increment}>Sumar lauris</button>
      <button onClick={decrement}>Restar lauris</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default MyComponent;