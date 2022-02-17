import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";

const { Home } = lazyImport(() => import("../features/Home"), "Home");
const { Todo } = lazyImport(() => import("../features/Todo"), "Todo");
const { Country } = lazyImport(() => import("../features/Country"), "Country");

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/todo"
        element={
          <Suspense fallback={"Loading..."}>
            <Todo />
          </Suspense>
        }
      />
      <Route
        path="/country"
        element={
          <Suspense fallback={"Loading..."}>
            <Country />
          </Suspense>
        }
      />
    </Routes>
  );
}
