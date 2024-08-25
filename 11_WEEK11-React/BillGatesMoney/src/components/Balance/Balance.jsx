
import './Balance.css';

// eslint-disable-next-line react/prop-types
function Balance({ balance }) {
  return (
    <div className="balance">
      <h1>${balance.toLocaleString()}</h1>
    </div>
  );
}

export default Balance;