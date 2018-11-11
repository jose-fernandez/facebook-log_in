<template>
  <Wrapper>
    <NavBar>
      <MainText
      :text="`Welcome ${user_profile.name}`"
      />
      <LogoutButton
        :text="'Log out'"
        :action="logout"
      />
    </NavBar>
  </Wrapper>
</template>

<script src="./dashboard.js"></script>