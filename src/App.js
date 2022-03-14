import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import StateComp from "./Components/StateComp/StateComp";
import EffectComp from "./Components/EffectComp/EffectComp";
import ContextComp from "./Components/ContextComp/ContextComp";
import RefComp from "./Components/RefComp/RefComp";
import MemoComp from "./Components/MemoComp/MemoComp";
import ReducerComp from "./Components/ReducerComp/ReducerComp";
import CallbackComp from "./Components/CallbackComp/CallbackComp";
import ImpHandleComp from "./Components/ImpHandleComp/ImpHandleComp";
import LayoutEffectComp from "./Components/LayoutEffectComp/LayoutEffectComp";
import DebugComp from "./Components/DebugComp/DebugComp";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/use-state" element={<StateComp />} />
        <Route path="/use-effect" element={<EffectComp />} />
        <Route path="/use-ref" element={<RefComp />} />
        <Route path="/use-context" element={<ContextComp />} />
        <Route path="/use-reducer" element={<ReducerComp />} />
        <Route path="/use-memo" element={<MemoComp />} />
        <Route path="/use-callback" element={<CallbackComp />} />
        <Route path="/use-imperative-handle" element={<ImpHandleComp />} />
        <Route path="/use-layout-effect" element={<LayoutEffectComp />} />
        <Route path="/use-debug-value" element={<DebugComp />} />
      </Routes>
    </Router>
  );
}

export default App;
