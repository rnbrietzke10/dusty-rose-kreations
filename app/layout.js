import './globals.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Dusty Rose Kreations',
  description: 'Dusty Rose Kreations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
