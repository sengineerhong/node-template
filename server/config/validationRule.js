const joi = require('joi');

module.exports = {

    /* loginPath */
    tab_all_loginPath: {
        body: {
            aFrYmd: joi.number().required(),
            aToYmd: joi.number().required(),
            pType: joi.string().required()
        }
    },
    /* dailySales-grid,yoy */
    tab_all_dailySales_grid: {
        body: {
            strDate: joi.number().required(),
        }
    },
    tab_all_dailySales_yoy: {
        body: {
            strDate: joi.number().required(),
        }
    },

  /**
   * User Validation
   */
  // POST - /user/sign-up
  user_sign_up: {
    body: {
      user_id: joi.string().required(),
      password: joi.string().required()
    }
  },
  // POST - /user/sign-in
  user_sign_in: {
    body: {
      user_id: joi.string().required(),
      password: joi.string().required()
    }
  },

  /**
   * Board Validation
   */
  // POST - /board
  board_write: {
    body: {
      title: joi.string().required(),
      contents: joi.string().required()
    }
  },
  // GET - /board/:board_id
  board_read: {
    params: {
      board_id: joi.number().required()
    }
  },
  // POST - /board/:board_id/comment
  board_comment: {
    params: {
      board_id: joi.number().required()
    },
    body: {
      comment: joi.string().required()
    }
  }
};
