import { Controller } from "@hotwired/stimulus"
import Select2 from "select2"
import $ from 'jquery';

export default class extends Controller {
  static values = {
    config: { type: Object, default: {} },
  }

  connect() {
    $(this.element).select2(this.configValue);

    /**
     * This is a workaround to auto focus on the select2 input when it is opened.
     */
    $(this.element).on('select2:open', function (e) {
      $(".select2-search__field")[0].focus();
    })
  }

}
