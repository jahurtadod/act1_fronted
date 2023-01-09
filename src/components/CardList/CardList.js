import './CardList.css';

function CardList () {
    return (
      <div className="container-list">
        <div className="card-lits-title">
          <h5 className="card-title">Latest Customers</h5>
          <a href="/" className="btn-view-all">
            View all
          </a>
        </div>
        <div className="list">
          <ul className="ul-list">
            <li>
              <div className="content-list">
                <div className="content-img">
                  <img className="img-profile" src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="Neil" />
                </div>
                <div className="info-person">
                  <p className="person-name">Neil Sims</p>
                  <p className="person-email">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
            <li>
              <div className="content-list">
                <div className="content-img">
                  <img
                    className="img-profile"
                    src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                    alt="Bonnie"
                  />
                </div>
                <div className="info-person">
                  <p className="person-name">Bonnie Green</p>
                  <p className="person-email">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
            <li>
              <div className="content-list">
                <div className="content-img">
                  <img
                    className="img-profile"
                    src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                    alt="Michael"
                  />
                </div>
                <div className="info-person">
                  <p className="person-name">Michael Gough</p>
                  <p className="person-email">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $67
                </div>
              </div>
            </li>
            <li>
              <div className="content-list">
                <div className="content-img">
                  <img className="img-profile" src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="Lana" />
                </div>
                <div className="info-person">
                  <p className="person-name">Lana Byrd</p>
                  <p className="person-email">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $367
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="content-list">
                <div className="content-img">
                  <img
                    className="img-profile"
                    src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                    alt="Thomas"
                  />
                </div>
                <div className="info-person">
                  <p className="person-name">Thomes Lean</p>
                  <p className="person-email">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export {CardList};