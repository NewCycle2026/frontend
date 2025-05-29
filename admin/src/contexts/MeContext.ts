// src/contexts/MeContext.ts
import type { AdminMe } from "@/hooks/useMe";
import { createContext, useContext } from "react";

export const MeContext = createContext<{ me: AdminMe | null; loading: boolean }>({
  me: null,
  loading: true,
});

export const useMeContext = () => useContext(MeContext);