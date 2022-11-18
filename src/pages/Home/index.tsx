import { MainForm } from "../../components/MainForm";
import { Result } from "../../components/Result";
import { HomeContainer, MainContent } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <MainForm />
        <Result />
      </MainContent>
    </HomeContainer>
  );
};