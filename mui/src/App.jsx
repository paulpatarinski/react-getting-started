import Button from '@mui/material/Button'
import { DeleteOutline } from '@mui/icons-material';

const App = () => (<Button variant="contained" color="primary" startIcon={<DeleteOutline />} onClick={() => alert('Hello')}>
    Click me
</Button>);

export default App;
