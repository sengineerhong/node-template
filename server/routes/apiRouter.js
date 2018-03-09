const validation = require('express-validation');
const rule = require('../config/validationRule');

const entirety = require('../controllers/entiretyController');
/*const UserCtrl = controller.UserCtrl;
const AuthCtrl = controller.AuthCtrl;
const BoardCtrl = controller.BoardCtrl;*/


module.exports = (router) => {

    // acct test1
    // router.route('/acct/test1/grid').post(validation(rule.tab_all_dailySales_grid), entirety.getAcctTest1Grid);
    router.route('/acct/test1/grid').post(validation(rule.tab_all_dailySales_grid), entirety.getAcctTest1Grid_reqOnce);
    router.route('/acct/test1/chart').post(validation(rule.tab_all_dailySales_grid), entirety.getAcctTest1Chart);
    // User
    // router.route('/all/loginpath/grid/day').post(validation(rule.tab_all_loginPath), entirety.getAllLoginPath);
    router.route('/all/dailysales/grid').post(validation(rule.tab_all_dailySales_grid), entirety.getAllLoginPath);
    // router.route('/all/dailysales/grid').post(validation(rule.tab_all_dailySales_grid), entirety.getAllDailySalesGrid);
    router.route('/all/dailysales/yoy').post(validation(rule.tab_all_dailySales_yoy), entirety.getAllDailySalesYoy);
    /*router.route('/user/sign-in')
        .post(validate(validationRule.user_sign_in), UserCtrl.signIn);

    // Board
    router.route('/board')
        .get(BoardCtrl.list)
        .post(AuthCtrl.auth, validate(validationRule.board_write), BoardCtrl.write);
    router.route('/board/:board_id')
        .get(AuthCtrl.auth, validate(validationRule.board_read), BoardCtrl.read);
    router.route('/board/:board_id/comment')
        .post(AuthCtrl.auth, validate(validationRule.board_comment), BoardCtrl.commentWrite);
*/
    return router;
};
