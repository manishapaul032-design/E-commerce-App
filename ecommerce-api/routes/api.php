use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\OrderController;



Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);




