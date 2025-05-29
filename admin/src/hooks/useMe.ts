// src/hooks/useMe.ts
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export interface AdminMe {
  id: number;
  name: string;
  email: string;
  role: string;
  position: string;
}

export default function useMe() {
  const [me, setMe] = useState<AdminMe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<AdminMe>("/admin-account/me")
      .then((res) => setMe(res.data))
      .catch(() => setMe(null))
      .then(() => setLoading(false));
  }, []);

  return { me, loading };
}

/*
export default function useMe() {
  const [me, setMe] = useState<AdminMe | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setMe({
      id: 1,
      name: "이순신",
      email: "navy@wayple.io",
      role: "ADMIN",
      position: "총사령관",
    });
    setLoading(false);
  }, 1000);
}, []);

  return { me, loading };
}
  */