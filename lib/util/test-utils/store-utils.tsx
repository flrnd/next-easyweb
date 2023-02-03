import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { AppStore, RootState, setupStore } from "lib/store";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface IProps {
  initialState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWrapper(
  ui: React.ReactElement,
  {
    initialState = {},
    store = setupStore(initialState),
    ...renderOptions
  }: IProps = {}
) {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, ...render(ui, { wrapper, ...renderOptions }) };
}
