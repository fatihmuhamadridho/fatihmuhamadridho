import { useEffect, useState } from "react";
import { AuthContext, useAuth } from "./auth.context";
import { useRouter } from "next/router";
import { AuthService } from "@/services/authService/auth";
import Default from "@/components/templates/default/default";
import { Center, Modal, Overlay, Text } from "@mantine/core";

export const AuthProvider = ({ children }: { children: any }) => {
  const router = useRouter();
  const [initializing, setInitializing] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  console.log({ isLoading, authenticated });

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await AuthService.getPrivilege();
        if (response.status === 200) {
          setUser(response.data.data);
          setAuthenticated(true);
        }
      } catch (error: any) {
        console.error(error.stack);
      }
      setInitializing(false);
    }

    loadUser();
  }, []);

  useEffect(() => {
    if (!authenticated && !initializing) setIsLoading(false);
    if (authenticated && !initializing) setIsLoading(false);
  }, [authenticated, initializing, router]);

  function onLogin({ user }: { user: any }) {
    setUser(user);
    setAuthenticated(true);
  }

  function onLogout() {
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem("access_token");
  }

  // if (isLoading) return <Default title={"Loading..."}>{children}</Default>;

  // if (!isLoading && !authenticated) {
  //   return (
  //     <Modal styles={{ content: { backgroundColor: "black"}}} opened onClose={() => {}} fullScreen withCloseButton={false}>
  //       <Center h={"90vh"}>
  //         <Text color="white">Anda Tidak Memiliki Akses</Text>
  //       </Center>
  //     </Modal>
  //   );
  // }

  return (
    <AuthContext.Provider
      value={{
        initializing,
        setInitializing,
        authenticated,
        setAuthenticated,
        user,
        setUser,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
