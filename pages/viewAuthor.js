import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  let domString = '';

  domString += `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
       <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Del</i>
     </div>
   </div>

   <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
      </div>
    </div>`;

  obj.books.forEach((item) => {
    domString += `
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
                <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
                <hr>
                <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
                <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
                <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            </div>
          </div>`;
  });

  renderToDOM('#view', domString);
};

export default viewAuthor;
