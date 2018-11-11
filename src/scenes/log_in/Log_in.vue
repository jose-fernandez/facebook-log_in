<template>
  <Wrapper>
    <WrapperButton>
      <MainButton
        :text="'Log in with Facebook'"
        :action="request_permissions"
        :authenticated="authenticated"
      />
    </WrapperButton>
  </Wrapper>
</template>

<script src="./log_in.js"></script>