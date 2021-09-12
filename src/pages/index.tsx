/* eslint-disable @next/next/no-page-custom-font */
import GlobalStyles from '../styles/global'
import Container  from '../components/Container';
import Content from '../components/Content';
import { ConfigProvider } from '../context/ConfigProvider';

export default function Home() {
  return (
    <ConfigProvider>
      <Container>
        <Content />
      </Container>
      <GlobalStyles />
    </ConfigProvider>
  );
}
