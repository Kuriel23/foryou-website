import { GetServerSideProps } from 'next';

export default function ProfileIndex(): JSX.Element {
  return <> </>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/', permanent: false } };
};
