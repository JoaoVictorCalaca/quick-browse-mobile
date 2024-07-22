import React, { FC } from 'react'
import { WebView } from 'react-native-webview';

interface WebViewerProps {
  url: string
}

const DynamicWebViewer: FC<WebViewerProps> = ({ url }) => {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: url }}
    />
  )
}

export default DynamicWebViewer
