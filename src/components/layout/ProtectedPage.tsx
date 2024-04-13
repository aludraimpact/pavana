import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isProtected, setIsProtected] = useState<boolean>(false);

  const validateToken = () => {
    const token = Cookies.get("token");
    if (!token) {
      setIsProtected(false);
      router.push("/");
    } else {
      setIsProtected(true);
    }
  }

  useEffect(() => {
    validateToken()
  }, []);

  if (isProtected) {
    return <>{children}</>;
  }
};

export default ProtectedPage;
