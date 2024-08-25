

function Balance({ balance }) {
  return (
    <div>
      <h1>${balance.toLocaleString()}</h1>
    </div>
  );
}

export default Balance;
