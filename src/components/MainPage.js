
import PageTitle from './PageTitle';
import style from '../styles/modules/app.module.scss';
import AppHeader from './AppHeader';

function main() {
    return (
        <div>
        <div className="container">
          <PageTitle>Add Attendencees</PageTitle>
          <div className={style.app__wrapper}>
            <AppHeader></AppHeader>
            
          </div>
        </div>
        </div>
      );
}

export default main