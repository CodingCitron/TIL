[VUE ROUTER DOCS](https://router.vuejs.org/)

## vue2

```javascript
// componet 에서 router 접근
this.$router;

// 페이지 이동
this.$router.push({ name: [페이지 이름], params: parmas, query: [query]  });
ex) parmas: '짱구'
ex) query: { page: 1 }

// [페이지 패스]/짱구?page=1
```

## vue3

[중첩 라우터](https://v3.router.vuejs.org/kr/guide/essentials/nested-routes.html)

```javascript
{
    path: "/auth",
    name: "auth",
    redirect: { name: "login" },
    children: [
      {
        path: "",
        alias: ["login"],
        name: "login",
        component: () => import("@/views/common/LoginView.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/common/RegisterView.vue"),
      },
      {
        path: "change-password",
        name: "change-password",
        component: () => import("@/views/common/ChangePasswordView.vue"),
      },
    ],
  },
```

# navigation guard

- https://router.vuejs.org/guide/advanced/navigation-guards.html

# vue3 router push

- https://router.vuejs.org/guide/essentials/navigation.html
