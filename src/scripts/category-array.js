import categories from "../data/categoties"

function categoryByArray(arr) {
    return categories.find(item=>arr[0].category===item.name);
}

