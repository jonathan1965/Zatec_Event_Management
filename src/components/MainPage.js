
import PageTitle from './PageTitle';
import style from '../styles/modules/app.module.scss';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

function main() {
    return (
        <div>
        <div className="container">
          <PageTitle>Attendence</PageTitle>
          <div className={style.app__wrapper}>
            <AppHeader></AppHeader>
            <AppContent></AppContent>
          </div>
        </div>
        </div>
      );
}

export default main