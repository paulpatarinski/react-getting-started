import * as React from "react"
import { createRoot } from 'react-dom/client';

import ReactButton from "./component";

const container = document.getElementById('reactContainer')
const root = createRoot(container);

root.render(<ReactButton />);