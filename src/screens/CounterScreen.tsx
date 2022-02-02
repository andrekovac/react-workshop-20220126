import React from "react";
import Counter from "../components/counter/Counter";
import CounterWithRedux from "../components/counter/CounterWithRedux";
import CounterWithReduxToolkit from "../components/counter/CounterWithReduxToolkit";
import Wrapper from "../components/counter/Wrapper";

const CounterScreen: React.FC = () => {
  return (
    <>
      <Wrapper title="Local State">
        <Counter />
      </Wrapper>
      <Wrapper title='"Vanilla" Redux'>
        <CounterWithRedux />
      </Wrapper>
      <Wrapper title="Redux Toolkit">
        <CounterWithReduxToolkit />
      </Wrapper>
    </>
  );
};

export default CounterScreen;
