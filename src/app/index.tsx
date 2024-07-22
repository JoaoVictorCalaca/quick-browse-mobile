import { Text, View } from "react-native";
import Header from "../components/header/Header";
import { useState } from "react";
import DynamicWebViewer from "../components/DynamicWebView/DynamicWebView";

export default function Index() {
  const [url, setUrl] = useState<string>('https://google.com')
  const [key, setKey] = useState<number>(0)

  const handleSearch = (text: string) => {
    setUrl(text)
    setKey(prevKey => prevKey+1)
  }

  const goHomePage = () => {
    setUrl('https://www.google.com');
    setKey(prevKey => prevKey+1)
  };

  const refreshPage = () => {
    setUrl(prevUrl => prevUrl)
    setKey(prevKey => prevKey+1)
  }

  const goToGitHub = ()=> {
    setUrl('https://github.com/JoaoVictorCalaca')
    setKey(prevKey => prevKey+1)
  }

  return (
    <View className="flex-1">
      <Header goHomePage={goHomePage} onSearch={handleSearch} refreshPage={refreshPage} goToGitHub={goToGitHub}/>
      <DynamicWebViewer url={url} key={key}/>
    </View>
  );
}
