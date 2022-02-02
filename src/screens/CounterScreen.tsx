import React from "react";
import Counter from "../components/counter/Counter";
import CounterWithRedux from "../components/counter/CounterWithRedux";
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
    </>
  );
};

export default CounterScreen;
