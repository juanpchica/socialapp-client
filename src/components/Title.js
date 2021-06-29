import React from "react";

export const Title = () => {
  return (
    <div>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='inherit' href='/' onClick={handleClick}>
          Material-UI
        </Link>
        <Link
          color='inherit'
          href='/getting-started/installation/'
          onClick={handleClick}
        >
          Core
        </Link>
        <Typography color='textPrimary'>Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  );
};
