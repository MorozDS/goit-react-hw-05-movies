import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
