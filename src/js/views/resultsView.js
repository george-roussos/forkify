import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';
import Fraction from 'fractional';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for query. Please try another!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
