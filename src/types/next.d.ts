import 'next';

declare module 'next' {
  type PageProps = {
    params?: { [key: string]: string | string[] }
    searchParams?: { [key: string]: string | string[] | undefined }
  }
}