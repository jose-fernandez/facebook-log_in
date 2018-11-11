<template>
  <Wrapper>
    <WrapperButton>
      <MainButton
        :text="'Log in with Facebook'"
        :action="request_permissions"
      />
    </WrapperButton>
    <WrapperError v-if="auth_failed">
      <ErrorText :text="'Accept Facebook permissions'"/>
    </WrapperError>
  </Wrapper>
</template>

<script src="./log_in.js"></script>